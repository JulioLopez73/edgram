import firebase from 'firebase'
import {progressBar, progressStatus, showProgress, hideProgress} from './upload_progress'
import {errorMsg, successMsg} from './messages'
import {savePhotoInDB} from './photos_db'

const uploader = () => {
  const d = document,
    c = console.log

  const uploaderScripts = setInterval(() => {
    if (d.readyState === 'complete') {
      clearInterval(uploaderScripts)

      const storageRef = firebase.storage().ref().child('photos'),
        dbRef = firebase.database().ref().child('photos'),
        user = firebase.auth().currentUser,
        form = d.getElementById('upload'),
        uploader = d.getElementById('uploader'),
        output = d.querySelector('.Uploader').querySelector('.Progress-output')

      uploader.addEventListener('change', e => {
        output.innerHTML = ''
        Array.from(e.target.files).forEach(file => {
          // c(e.target.files, file)

          if (file.type.match('image.*')) {
            let uploadTask = storageRef.child(file.name).put(file)

            uploadTask.on('state_changed', data => {
              // c(data)
              showProgress()
              progressStatus(data)
            }, err => {
              c(err, err.code, err.message)
              output.innerHTML = errorMsg(`${err.message}`, err)
            }, () => {
              storageRef.child(file.name).getDownloadURL()
                .then(url => {
                  c(url)
                  output.insertAdjacentHTML('afterbegin', `${successMsg('Tu foto se a subido')}<img src="${url}">`)
                  savePhotoInDB(url, user)
                  hideProgress()
                })
                .catch(err => output.innerHTML = errorMsg(`${err.message}`, err))
            })
          } else {
            output.innerHTML = errorMsg('Tu archivo debe de ser una imagen', null)
          }
        })
        form.reset()
      })
    }
  },100)
  return `
    <article class="Uploader Content-section u-show ">
      <h2 class="u-title">Sube tus fotos</h2>
      <form id="upload" name="upload">
        <input type="file" id="uploader" multiple>
        <label for="uploader">
          <i class="fa fa-cloud-upload" title="Subir Foto(s)"></i>
        </label>
      </form>
      ${progressBar()}
    </article>
  `
}

export default uploader
