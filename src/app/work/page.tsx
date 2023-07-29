import Image from 'next/image'


export default function Page({}) {
    return(
        <div className="flex">
          <div className="flex flex-col">
            <div>image</div>
            <h1>title</h1>
            <h2>description</h2>
            <div>icons</div>
            <h3>detail</h3>
          </div>
        </div>
    )
}