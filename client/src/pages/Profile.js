import "../styles/Profile.css";

const Profile = () => {
  return (
<div class="profile-container">
  <div class="profile-header">
  <div class="profile-img">
  <img src="https://i.pinimg.com/564x/01/5a/17/015a1757e67f766a12621af543b3a5fd.jpg" width="200" alt="Profile Image"/>

  <div class="profile-nav-info">
     <h3 class="user-name">Ваше Имя или Ник</h3>
      <div class="profile-inf">
        <h6 class="podr">Подробнее:</h6>
        <p id="pod" class="pod">How do you usually celebrate your birthday?
In England birthday parties are a lot of fun! All the children like this holiday. They bring presents and cards for the Birthday Girl or Boy. Everybody wears party hats and nice clothes.</p>
        </div>
  </div>
  </div>
</div>
    <div class="main-profile">
            <div class="profile-side">
              <p class="profile-side-text"><i class="profile-side-text"></i>Отзывы</p>
                <div class="profile-side-callback">
                  <h3>текст</h3>
                </div>
            </div>
          <div class="osnova">
            <div class="osnova-text">
              <h5>Описание</h5>
            </div>
              <p className="osnova-title-text">
              We just opened one of my grandfather's phones. 
              </p>
          </div>
    </div>
</div>
  );
};

export default Profile;