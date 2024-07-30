import './App.css'
import './style.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { parseLinkHeader } from './parseLinkHeader.ts'

interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

const LIMIT = 30

function App() {
  const [photos, setPhotos] = useState([] as Photo[])
  const [loading, setLoading] = useState(false)
  const nextPhotoUrlRef = useRef('')

  const fetchPhotos = async (
    url: string,
    { overwrite = false }: { overwrite: boolean },
  ) => {
    setLoading(true)

    try {
      await new Promise((res) => setTimeout(res, 2000))
      const response = await fetch(url)
      nextPhotoUrlRef.current = parseLinkHeader(
        response.headers.get('Link'),
      ).next
      const data = await response.json()

      if (overwrite) {
        setPhotos(data)
        return
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...data])
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const imgRef = useCallback((image: HTMLImageElement | null) => {
    if (image == null || nextPhotoUrlRef.current == null) return
    console.log('imgRef', image)
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log('isIntersecting')
          fetchPhotos(nextPhotoUrlRef.current, {
            overwrite: false,
          })
          observer.unobserve(image)
        }
      },
      { root: null },
    )

    observer.observe(image)
  }, [])

  useEffect(() => {
    fetchPhotos(
      `http://localhost:3000/photos-short-list?_page=1&_limit=${LIMIT}`,
      {
        overwrite: true,
      },
    )
  }, [])

  return (
    <>
      <div className="grid">
        {photos.map((photo, index) => {
          return (
            <img
              src={photo.url}
              alt={photo.title}
              key={photo.id}
              ref={index === photos.length - 1 ? imgRef : undefined}
            />
          )
        })}
        {loading &&
          Array.from({ length: LIMIT }, (_, index) => index).map((n) => {
            return (
              <div key={n} className="skeleton">
                Loading...
              </div>
            )
          })}
      </div>
    </>
  )
}

export default App
