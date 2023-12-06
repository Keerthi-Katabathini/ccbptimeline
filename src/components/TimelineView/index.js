// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="timeline-container">
      <h1 className="heading">
        MY JOURNEY OF
        <span className="sub-heading"> CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachObject => {
            if (eachObject.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  key={eachObject.id}
                  courseDetails={eachObject}
                />
              )
            }

            return (
              <ProjectTimelineCard
                key={eachObject.id}
                projectDetails={eachObject}
              />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
