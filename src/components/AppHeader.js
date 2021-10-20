import React from 'react'

const AppHeader = ({ json2obj, setJson2obj }) => {
  const handleSwitch = () => {
    setJson2obj(!json2obj)
  }
  return (
    <h1 className="mb-4 mt-3">
      <span>
        <span className="text-primary">{json2obj ? 'json' : 'obj'}</span>
        <span className="text-white">2</span>
        <span className="text-primary">{json2obj ? 'obj' : 'json'}</span>
        <span className="text-white ms-2"></span>
      </span>
      <span>
        <button className="border-0 bg-transparent" onClick={handleSwitch}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="switchButton" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>
        </button>
      </span>
    </h1>
  )
}

export default AppHeader