import { Link, useLocation } from 'react-router-dom'
import { ALL_COURSES, COURSES_BY_PATH } from '../data/courses'

export function CourseDetailPage() {
  const location = useLocation()
  const course = COURSES_BY_PATH[location.pathname]

  if (!course) {
    return (
      <main className="course-detail-page">
        <div className="course-detail-shell">
          <h1>Course not found</h1>
          <p>The requested course page is not available.</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  const intermediate = ALL_COURSES.filter((c) => c.level === 'intermediate')
  const degree = ALL_COURSES.filter((c) => c.level === 'degree')

  return (
    <main className="course-detail-page">
      <div className="course-detail-shell">
        <section className="course-detail-card">
          <header className="course-detail-header">
            <p className="course-detail-tag">{course.tag}</p>
            <h1>{course.title}</h1>
            {course.subjectToPermission ? (
              <p className="course-detail-permission">Subject to permission</p>
            ) : null}
          </header>

          <p className="course-detail-intro">{course.detail.intro}</p>

          {course.detail.paragraphs.map((paragraph) => (
            <p key={paragraph} className="course-detail-copy">
              {paragraph}
            </p>
          ))}

          <h2 className="course-detail-subtitle">Key Highlights</h2>
          <ul className="course-detail-list">
            {course.detail.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="course-detail-actions">
            <a href="/#admissions" className="btn-primary">
              Apply for Admission
            </a>
            <Link to="/#courses" className="btn-secondary">
              Back to Courses
            </Link>
          </div>
        </section>

        <aside className="course-detail-sidebar">
          <h3>Our Courses</h3>
          <p className="course-detail-sidebar-label">Intermediate</p>
          <ul>
            {intermediate.map((item) => (
              <li key={item.slug}>
                <Link to={item.path} className={item.path === course.path ? 'is-active' : ''}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <p className="course-detail-sidebar-label">Degree</p>
          <ul>
            {degree.map((item) => (
              <li key={item.slug}>
                <Link to={item.path} className={item.path === course.path ? 'is-active' : ''}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  )
}

