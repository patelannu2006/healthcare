import { Link } from 'react-router-dom'
export default function NotFoundPage() { return <div className="page-wrap empty-page"><h1>Page not found</h1><p className="subheading">This workspace view does not exist.</p><Link className="primary-button" to="/">Return to overview</Link></div> }
