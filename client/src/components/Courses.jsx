import { Link } from 'react-router-dom'
import { COLLEGE_AFFILIATION } from '../config'
import { DEGREE_COURSES, INTERMEDIATE_COURSES } from '../data/courses'

function CourseGrid({ courses }) {
  return (
    <div className="courses-grid">
      {courses.map((c) => (
        <div key={c.slug} className="course-card">
          <div className="course-card-top">
            <span className="course-tag">{c.tag}</span>
            <h3>{c.title}</h3>
          </div>
          <div className="course-card-body">
            <p>{c.body}</p>
            {c.subjectToPermission ? (
              <p className="course-permission-note">Subject to permission</p>
            ) : null}
            <Link to={`/courses/${c.level}/${c.slug}`} className="course-link">
              View Details {'->'}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export function Courses() {
  return (
    <section id="courses">
      <div className="courses-header">
        <div className="section-label">Academic Programmes</div>
        <h2 className="section-title">Courses Offered</h2>
      </div>

      <div id="courses-intermediate" className="courses-group">
        <h3 className="courses-group-title">Intermediate</h3>
        <CourseGrid courses={INTERMEDIATE_COURSES} />
      </div>

      <div id="courses-degree" className="courses-group">
        <h3 className="courses-group-title">Degree</h3>
        <p className="courses-group-desc">{COLLEGE_AFFILIATION}.</p>
        <CourseGrid courses={DEGREE_COURSES} />
      </div>
    </section>
  )
}
