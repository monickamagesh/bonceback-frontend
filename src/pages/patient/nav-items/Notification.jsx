import React from "react";
import "./Notification.css";
import b4 from "../../../assets/therapist/b4.png";
import b2 from "../../../assets/therapist/b2.jpg";
import g1 from "../../../assets/therapist/g1.jpg";

const notifications = [
  {
    id: 1,
    image: b4,
    message: "Welcome, Diti! What services are you interested in?",
    date: "2023-12-17",
    time: "11:11",
  },
  {
    id: 2,
    image: b2,
    message: "Your request has been sent to Dr. Monicka Magesh.",
    date: "2023-12-18",
    time: "11:12",
  },
  {
    id: 3,
    image: b2,
    message:
      "Your request has been approved. A schedule will be assigned to you shortly.",
    date: "2023-12-19",
    time: "11:13",
  },
  {
    id: 4,
    image: g1,
    message:
      "Your treatment regimen schedule has been posted by your therapist.",
    date: "2023-12-19",
    time: "11:11",
  },
];

const groupNotificationsByDate = (notifications) => {
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  const startOfYesterday = new Date(startOfToday);
  startOfYesterday.setDate(startOfYesterday.getDate() - 1);

  const grouped = {
    Today: [],
    Yesterday: [],
    Earlier: [],
  };

  notifications.forEach((notification) => {
    const notifDate = new Date(notification.date);

    if (notifDate >= startOfToday) {
      grouped.Today.push(notification);
    } else if (notifDate >= startOfYesterday) {
      grouped.Yesterday.push(notification);
    } else {
      grouped.Earlier.push(notification);
    }
  });

  Object.keys(grouped).forEach((key) => {
    grouped[key].sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateB - dateA;
    });
  });

  return grouped;
};

const Notification = () => {
  const groupedNotifications = groupNotificationsByDate(notifications);

  return (
    <div className="notification-container">
      <div className="notification-white-card">
        <h2 className="notification-title">Notifications</h2>
        {Object.entries(groupedNotifications).map(
          ([group, items]) =>
            items.length > 0 && (
              <div key={group} className="notification-group">
                <h3 className="notification-group-title">{group}</h3>
                {items.map((note) => (
                  <div key={note.id} className="notification-item">
                    <img
                      src={note.image}
                      alt="User Avatar"
                      className="notification-avatar"
                    />
                    <div className="notification-details">
                      <p className="notification-message">{note.message}</p>
                      <span className="notification-timestamp">
                        {note.time}
                      </span>
                    </div>
                    <button className="notification-btn">View</button>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Notification;
