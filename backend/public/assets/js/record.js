const recordButton = document.getElementById('recordButton');
const recordButtonImage = recordButton.firstElementChild;
const recordedAudioContainer = document.getElementById('recordedAudioContainer');
const saveAudioButton = document.getElementById('saveButton');
const discardAudioButton = document.getElementById('discardButton');
const recordingsContainer = document.getElementById('recordings');

let chunks = []; // will be used later to record audio
let mediaRecorder = null; // will be used later to record audio
let audioBlob = null; // the blob that will hold the recorded audio

function mediaRecorderDataAvailable(e) {
  chunks.push(e.data);
}

function mediaRecorderStop() {
  // check if there are any previous recordings and remove them
  if (recordedAudioContainer.firstElementChild.tagName === 'AUDIO') {
    recordedAudioContainer.firstElementChild.remove();
  }
  const audioElm = document.createElement('audio');
  audioElm.setAttribute('controls', ''); // add controls
  audioBlob = new Blob(chunks, { type: 'audio/mp3' });
  const audioURL = window.URL.createObjectURL(audioBlob);
  audioElm.src = audioURL;
  // show audio
  recordedAudioContainer.insertBefore(audioElm, recordedAudioContainer.firstElementChild);
  recordedAudioContainer.classList.add('d-flex');
  recordedAudioContainer.classList.remove('d-none');
  // reset to default
  mediaRecorder = null;
  chunks = [];
}

function record() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('Your browser does not support recording!');
    return;
  }

  
  // change image in button
  recordButtonImage.src = `./assets/images/${mediaRecorder && mediaRecorder.state === 'recording' ? 'microphone' : 'stop'}.png`;
  if (!mediaRecorder) {
    // start recording
    navigator.mediaDevices.getUserMedia({
      audio: true,
    })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        mediaRecorder.ondataavailable = mediaRecorderDataAvailable;
        mediaRecorder.onstop = mediaRecorderStop;
      })
      .catch((err) => {
        alert(`The following error occurred: ${err}`);
        // change image in button
        recordButtonImage.src = '/images/microphone.png';
      });
  } else {
    // stop recording
    mediaRecorder.stop();
  }
}

recordButton.addEventListener('click', record);

function resetRecording() {
  if (recordedAudioContainer.firstElementChild.tagName === 'AUDIO') {
    recordedAudioContainer.firstElementChild.remove();
    // hide recordedAudioContainer
    recordedAudioContainer.classList.add('d-none');
    recordedAudioContainer.classList.remove('d-flex');
  }
  audioBlob = null;
}

// fetch recordings
function fetchRecordings() {
  fetch('/audio')
    .then((response) => response.json())
    .then((response) => {
      if (response.success && response.files) {
        recordingsContainer.innerHTML = ''; // remove all children
        response.files.forEach((file) => {
          const recordingElement = createRecordingElement(file);
          recordingsContainer.appendChild(recordingElement);
        });
      }
    })
    .catch((err) => console.error(err));
}

function saveRecording() {
  const formData = new FormData();
  const recipient = document.getElementById("recipient").value; 
  const theme = document.getElementById("theme").value;   
  formData.append('audio', audioBlob, 'recording.mp3');
  formData.append('theme_id', theme);
  formData.append('recipient_id', recipient);
  fetch('/recordaudio', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then(() => {
      alert('Your recording is saved');
      resetRecording();
      fetchRecordings();
      document.location.reload()
    })
    .catch((err) => {
      console.error(err);
      alert('An error occurred, please try again later');
      resetRecording();
    });
}

saveAudioButton.addEventListener('click', saveRecording);

function discardRecording() {
  if (confirm('Are you sure you want to discard the recording?')) {
    // discard audio just recorded
    resetRecording();
  }
}

discardAudioButton.addEventListener('click', discardRecording);

fetchRecordings();
