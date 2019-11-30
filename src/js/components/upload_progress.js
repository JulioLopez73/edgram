export const progressBar = () => (`
  <div class="Progress u-hide">
    <progress value="0" max="100" class="ProgressBar"></progress>
    <span class="Progress-advance"></span>
  </div>
  <div class="Progress-output"></div>
`)

export const progressStatus = data => {
  const d = document,
    c = console.log,
    progress = d.querySelectorAll('.Progress'),
    progressBar = d.querySelectorAll('.ProgressBar'),
    progressAdvance = d.querySelectorAll('.Progress-advance'),
    progressOutPut = d.querySelectorAll('.Progress-output')

  progress.forEach(progress => {
    let advance = Math.floor((data.bytesTransferred / data.totalBytes) * 100)
    progress.querySelector('.ProgressBar').value = advance
    progress.querySelector('.Progress-advance').innerHTML = `${advance} %`
    // c(advance)
  })
}

export const showProgress = () => document.querySelectorAll('.Progress').forEach(bar =>
  bar.classList.remove('u-hide'))

export const hideProgress = () => document.querySelectorAll('.Progress').forEach(bar => bar.classList.add('u-hide'))

export const clearProgress = () => {
  const d = document
  d.querySelectorAll('.Progress-output').forEach(output => output.innerHTML='')
  d.querySelectorAll('.ProgressBar').forEach(bar => bar.value = 0)
  d.querySelectorAll('.Progress-advance').forEach(advance => advance.innerHTML = '')
}
