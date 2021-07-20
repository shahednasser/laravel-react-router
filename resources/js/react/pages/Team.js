import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import Person from "../components/Person"

function Team () {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.axios.get('/api/team')
      .then((response) => {
        const data = response.data
        if (data.team) {
          setTeam(data.team)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="row">
          {team.map((person, index) => (
            <div className="col-3" key={index}>
              <Person person={person} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Team;