import firebase from 'firebase'
import {progressBar, progressStatus, showProgress, hideProgress} from './upload_progress'
import {errorMsg, successMsg} from './messages'
import {savePhotoInDB} from './photos_db'
import { Stream } from 'stream'

const camera = () => {
  const d = document,
    c = console.log,
    n = navigator

  const cameraScripts = setInterval(() => {
    if (d.readyState === 'complete') {
      clearInterval(cameraScripts)
      const cameraApp = d.querySelector('.Camera'),
        video = d.getElementById('camera-stream'),
        photo = d.getElementById('photo'),
        startCameraBtn = d.getElementById('start-camera'),
        output = d.querySelector('.Camera').querySelector('.Progress-output'),
        controls = d.querySelector(".Camera-menu"),
        takePhotoBtn = d.getElementById('take-photo'),
        deletePhotoBtn = d.getElementById('delete-photo'),
        uploadPhotoBtn = d.getElementById('upload-photo'),
        downloadPhotoBtn = d.getElementById('download-photo'),
        canvas = d.getElementById('canvas-snap'),
        context = canvas.getContext('2d')

        let snapshot

      function cameraInit() {

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
            video.srcObject = stream;
            video.play()
        })
        .catch(err => output.innerHTML = errorMsg(`Hubo un error al acceder a la cámara de tu dispositivo: ${err.mesagge}`, err))
      }

      function takeSnapshot() {
        let width = video.videoWidth,
          height= video.videoHeight

        canvas.width = width
        canvas.height = height

        context.drawImage(video, 0, 0 , width, height)

        return canvas.toDataURL('image/png')
      }

      function cameraReset() {
        // Volver a mostrar y reproducir el video
        video.style.display = 'block'
        video.play()

        // Limpiar el snapshot de la imagen dinámica y del enlace de descarga
        photo.style.display = 'none'
        photo.setAttribute('src', '')
        downloadPhotoBtn.querySelector('a').href = '#'

        // Desabilitar botones de subir y descargar
        deletePhotoBtn.classList.add('u-disable')
        uploadPhotoBtn.classList.add('u-disable')
        downloadPhotoBtn.classList.add('u-disable')
      }

      cameraInit()
      photo.style.display = 'none'
      canvas.style.display = 'none'

      startCameraBtn.addEventListener('click', e => {
        e.preventDefault()
        video.play()
        video.style.display = 'block'
      })

      takePhotoBtn.addEventListener('click', e => {
        e.preventDefault()

        // Pausamos y Ocultamos el video
        video.style.display = 'none'
        video.pause()

        // Mostramos la captura de la cámara en una imagen
        snapshot = takeSnapshot()
        photo.style.display = 'block'
        photo.setAttribute('src', snapshot)

        // Asignar la imagen capturada al enlace de descarga
        downloadPhotoBtn.querySelector('a').href = snapshot

        // Abilitar botones de eliminar, subir y descargar
        deletePhotoBtn.classList.remove('u-disable')
        uploadPhotoBtn.classList.remove('u-disable')
        downloadPhotoBtn.classList.remove('u-disable')
      })

      deletePhotoBtn.addEventListener('click', e => {
        e.preventDefault()
        cameraReset()
      })

      uploadPhotoBtn.addEventListener('click', e => {
        e.preventDefault()

        const storageRef = firebase.storage().ref().child('photos'),
          dbRef = firebase.database().ref().child('photos'),
          user = firebase.auth().currentUser

        let photoName = `photo_${Math.floor(Math.random() * 10000000)}`,
          uploadTask = storageRef.child(photoName).putString(snapshot, 'data_url')

          uploadTask.on('state_changed', data => {
            // c(data)
            showProgress()
            progressStatus(data)
          }, err => {
            // c(err, err.code, err.message)
            output.innerHTML = errorMsg(`${err.mesagge}`, err)
          }, () => {
            storageRef.child(photoName).getDownloadURL()
              .then(url => {
                // c(url)
                output.innerHTML = successMsg('Tu foto se a subido')
                savePhotoInDB(url, user)
                hideProgress()
                setTimeout(() => output.innerHTML = '', 3000)
                cameraReset()
              })
              .catch(err => output.innerHTML = errorMsg(`${err.message}`, err))
          })
      })
    }
  },100)
  return `
    <article id="camera-app" class="Camera Content-section u-hide">
      <video id="camera-stream" class="Camera-video" muted ></video>
      <img id="photo" class="Camera-photo">
      <nav class="Camera-menu">

        <button id="start-camera" title="Iniciar Cámara"><i class="fa fa-power-off"></i></button>
        <button id="take-photo"title="Tomar Foto"><i class="fa fa-camera"></i></button>
        <button id="delete-photo" class="u-disable" title="Borrar Foto"><i class="fa fa-trash"></i></button>
        <button id="upload-photo" class="u-disable" title="Subir Foto"><i class="fa fa-upload"></i></button>
        <button id="download-photo" class="u-disable" title="Guardar Foto"><a href="#" download="selfie_${Math.floor(Math.random() * 10000000)}.png"><i class="fa fa-download"></i></a></button>
      </nav>
      <canvas id="canvas-snap"></canvas>
      ${progressBar()}
    </article>
  `
}

export default camera
