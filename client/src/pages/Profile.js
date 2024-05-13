<<<<<<< HEAD
import "../styles/Profile.css";

const Profile = () => {
    return (
        <div class="container">
            <div class="profile-header">
                <div class="profile-img">
                    <img
                        src="https://i.pinimg.com/564x/01/5a/17/015a1757e67f766a12621af543b3a5fd.jpg"
                        width="200"
                        alt="Profile Image"
                    />
                </div>
                <div class="profile-nav-info">
                    <h3 class="user-name">Название</h3>
                    <div class="address">
                        <p id="state" class="state">
                            Описание
                        </p>
                        <span id="country" class="country">
                            Текст
                        </span>
                    </div>
                </div>
            </div>
            <div class="main-bd">
                <div class="left-side">
                    <div class="profile-side">
                        <p class="mobile-no">
                            <i class="fa fa-phone"></i>Контакты
                        </p>
                        <p class="user-mail">
                            <i class="fa fa-envelope"></i>Контакты
                        </p>
                        <div class="user-bio">
                            <h3>Описание</h3>
                            <p class="bio">Какой нибудь текст</p>
                        </div>
                        <div class="profile-btn">
                            <button class="chatbtn" id="chatBtn">
                                <i class="fa fa-comment"></i>Связаться
                            </button>
                            <button class="createbtn" id="Create-post">
                                <i class="fa fa-plus">Отзывы?</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
=======
import "../styles/Profile.css";

const Profile = () => {
  return (
<div class="container">
<div class="profile-header">
  <div class="profile-img">
  <img src="https://i.pinimg.com/564x/01/5a/17/015a1757e67f766a12621af543b3a5fd.jpg" width="200" alt="Profile Image"/>
  </div>
  <div class="profile-nav-info">
     <h3 class="user-name">Название</h3>
      <div class="address">
        <p id="state" class="state">Описание</p>
        <span id="country" class="country">Текст</span>
        </div>
  </div>
</div>
    <div class="main-bd">
          <div class="left-side">
            <div class="profile-side">
              <p class="mobile-no"><i class="fa fa-phone"></i>Контакты</p>
              <p class="user-mail"><i class="fa fa-envelope"></i>Контакты</p>
                <div class="user-bio">
                  <h3>Описание</h3>
                  <p class="bio">
                    Какой нибудь текст
                  </p>
                </div>
                <div class="profile-btn">
                  <button class="chatbtn" id="chatBtn"><i class="fa fa-comment"></i>Связаться</button>
                  <button class="createbtn" id="Create-post"><i class="fa fa-plus">Отзывы?</i></button>
                </div>
            </div>
          </div>
      </div>
</div>
  );
};

export default Profile;
>>>>>>> 8d6e8a941c0d2e2a8a62a9fd33027d90649a42c5
