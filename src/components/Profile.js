const Profile = ({ name, age, country, hobby }) => {
  return (
    <div>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Country: {country}</div>
      <div>Hobby: {hobby}</div>
    </div>
  );
};

export default Profile;