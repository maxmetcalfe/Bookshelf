import React from 'react'

export default function Preview() {
  return (
    <div>
      <link href='https://fonts.googleapis.com/css2?family=Rock+Salt&family=Satisfy&family=Sedgwick+Ave+Display&display=swap' rel='stylesheet' />
      <style jsx>{`
        div {
          margin: 20px;
        }

        h1 {
          text-align: center;
        }

        iframe {
          width: 100%;
          height: 800px;
          border-radius: 5px;
          border: solid 1px black;
        }
      `}</style>
      <iframe src='../?books=11084145-steve-jobs,8664353-unbroken,10884.Einstein,1845.Into_the_Wild,2203.John_Adams,2199.Team_of_Rivals'></iframe>
      <iframe src='../?author=3892'></iframe>
    </div>
  )
}
