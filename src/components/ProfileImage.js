function ProfileImage({userImg}) {

       return (
        <div>
            <img
        src={userImg}
        className="profile"
        alt="profile"
      />
        </div>
    )
}

export default ProfileImage