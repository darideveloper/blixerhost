import Image from 'next/image'

export default function AnimatedBg() {
  // Generate and randomize the images
  const imagesNumber = 7
  let imagesSrc = Array.from({ length: imagesNumber }).map(
    (_, index) => `/images/minecraft-logos/${index + 1}.webp`
  )
  imagesSrc = imagesSrc.sort(() => Math.random() - 0.5)

  return (
    <div
      className={`
        animated-bg
        fixed
        top-0
        left-0
        w-full
        h-full
        -z-20 flex
        items-center
        justify-center
      `}
    >
      {imagesSrc.map((imageSrc, index) => {
        // Random time for even and odd images
        let delay
        if (index % 2 === 0) {
          delay = `1s`
        } else {
          delay = `2s`
        }

        return (
          <Image
            key={index}
            src={imageSrc}
            alt=""
            width={100}
            height={100}
            className={`
              m-10
              animate-ping-slow
              opacity-10
              shadow-sm
              rounded-full
            `}
            style={{
              animationDelay: delay,
            }}
          />
        )
      })}
    </div>
  )
}
