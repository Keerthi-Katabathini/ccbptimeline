// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div>
      <div className="course-container">
        <h1 className="courser-heading">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle className="clock" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="used-frameworks">
        {tagsList.map(eachItem => (
          <p key={eachItem.id} className="item">
            {eachItem.name}
          </p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
