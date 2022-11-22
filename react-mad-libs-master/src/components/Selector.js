function Selector({data, setSelectedMadLib}) {

  // render
  const renderChoices = () => {
    console.log('inside data', data)
    return data.map((story, index) => {
      console.log(story.title)
      return (
       <option key={index} value={index}>{story.title}</option>
      )
    })
  }
  
  const resetForms = () => {
    document.getElementById('div-words').reset();
  }
  const handleChange = (e) => {
    console.log('inside handleChange', e.target.value);
    setSelectedMadLib(data[e.target.value])
    resetForms()
    // document.forms
    
    // setSelectedMadLib(data);
  }
  // in the select tag below
  return (
    <div id="div-selector">
      <span>Select Story: </span>
      <select onChange={handleChange}> 
        { renderChoices() }
      </select>
    </div>
  )
}

export default Selector