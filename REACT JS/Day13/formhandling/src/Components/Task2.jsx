
import { useState } from "react"

const Task2 = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div>
      <h1>My Post</h1>

      <p>Click the Like button!</p>

      <button onClick={toggleLike}> {isLiked ? "Liked ❤️" : "Like"} </button>

      {isLiked && <p>You liked this post!</p>}
    </div>
  )
}

export default Task2

