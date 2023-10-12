import React from 'react'

const VideoCard = ({info }) => {
  const {snippet,statistics} = info;

  const { channelTitle,title,thumbnails  } = snippet;
  const {viewCount} = statistics;
  console.log(title)
  console.log("data in card",info)
  // console.log("this is video card")
  return (
    <div className='p-2 m-2 w-60 shadow-lg' >
      <img className='rounded-lg' src={thumbnails.medium .url} alt='img'/>
      <ul>
        <li className='font-bold pt-2'>{channelTitle}</li>
        <li>{title}</li>
        <li>{viewCount} views</li>
      </ul>
        </div>
  )
}

export default VideoCard