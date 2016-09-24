import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Repo = ({ repo, owner }) => {
  const { login } = owner  //login=owner.login
  const { name, description } = repo //name=description=repo.repo.description

  return (
    <div className="Repo">
      <h3>
        <Link to={`/${login}/${name}`}>
          {name}
        </Link>
        {' by '}
        <Link to={`/${login}`}>
          {login}
        </Link>
      </h3>
      {description &&
        <p>{description}</p>
      }
    </div>
  )
}
//link to 是路由。
Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired
  }).isRequired
}

export default Repo
