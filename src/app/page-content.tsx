'use client'

import Select from "react-select";

const PageContent = () => {
  return <div>
    <Select options={[{label: 'Hello!', value: 'world'}]} onChange={(value) => console.log(value)}/>
  </div>
}

export default PageContent
