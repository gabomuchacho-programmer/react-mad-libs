function WordForm({words, updateMadLibWord}) {
  // render
  const renderInputs = () => {
    console.log('inside wordform', words)
    const handleChange = (i, e) => {
        updateMadLibWord(i, e.target.value)
      }
    return words.map((word,i) => {
      // console.log(word.label)
      console.log(word.key)
      return (
       <input key={i} placeholder={word.label} onChange={e => handleChange(i, e)}></input> //
      )
    }
    ) // implement changes
  }
  
  return (
    <form id="div-words">
      { renderInputs() }
    </form>
  )
}

export default WordForm
