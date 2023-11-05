import { Button, Card } from "@mui/material";
import NavBar from "./HomeNavbar";
import Style from "./Event.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Rsvp = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  const [replies, setReplies] = useState({}); // Initialize as an empty object
  const [userDetails, setUserDetails] = useState({}); // Initialize as an empty object

  // reply from guest API
  useEffect(() => {
    fetch(`http://localhost:4000/eventreply/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network not ok");
        }
        return res.json();
      })
      .then((data) => {
        setReplies(data.rsvp);
      })
      .catch((error) => {
        console.log("Fetch error", error);
      });
  }, [id]);

  // Fetch user details for each reply
  useEffect(() => {
    Object.keys(replies).forEach((userId) => {
      fetch(`http://localhost:4000/user/${userId}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            [userId]: data.user,
          }));
        });
    });
  }, [replies]);

  return (
    <div className={Style.background}>
      <NavBar />

      <div style={styles.guestContainer}>
        <h1>Rsvp from Guests</h1>

        <ul style={styles.list}>
          {Object.keys(replies).map((userId) => (
            <li key={userId} style={styles.listItem}>
              <div style={styles.card}>
                   {userDetails[userId] && (
                  <div>
                    
                    <p> <strong> Name:</strong> {userDetails[userId].name}</p>
                    <p><strong> Email:</strong> {userDetails[userId].email}</p>
                    <p><strong> Guest Reply:</strong>{replies[userId]}</p>
                    
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '800px',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#F0F0F0',
    border: '2px solid black',
    marginTop: '20px',
  },
  guestContainer: {
    border: '2px solid black',
    width: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ADD8E6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '24px',
    margin: '0 0 20px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    margin: '10px 0',
  },
  button: {
    marginTop: '20px',
  },
};

export default Rsvp;
