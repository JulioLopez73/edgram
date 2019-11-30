import firebase from 'firebase'

const timeline = () => {
  const d = document,
    c = console.log

  const timelineScripts = setInterval(() => {
    if (d.readyState === 'complete') {
      clearInterval(timelineScripts)
    }
  },100)
  return `
    <article class="Timeline Content-section u-hide">
      <h2>Timeline</h2>
    </article>
  `
}

export default timeline
