import React from 'react'

function Card({myArr, imgSrc, description, name = "Anonymous", address, designation = "Not assigned yet"}) {
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={imgSrc} alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <p>{myArr.join(" ")}</p>
            <blockquote>
            <p className="text-lg font-medium">
               {description}
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {name}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                 {address.city}, {address.state}, {address.country}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {designation}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card