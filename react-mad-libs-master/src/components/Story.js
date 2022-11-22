import { useState } from 'react'

function Story({text}) {
  // render

  const [visible, setVisible] = useState(false)
  const renderStory = () => {
    return (
      <div>
        <hr></hr>
        {text}
      </div>
    ) // implement changes
  }

  return (
    <button id="story-header" onClick={() => setVisible(!visible)}>
      Click here when you're ready to see your story!
      <div id="div-story">
        { visible ? renderStory() : 'Your story is gonna be soooooooo good.' }
      </div>
    </button>
  )
}

export default Story
