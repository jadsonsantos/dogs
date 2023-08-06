import React from "react"

const Head = (props) => {
  const { title, description } = props

  React.useEffect(() => {
    document.title = `${title} | Dogs`
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", description || "")
  }, [props])

  return null
}

export default Head
