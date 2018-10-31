import React, { Component, Fragment } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <div class="profile-page mt-1">
          <div class="profile-info">
            <div class="user-info">
              <img
                src="./images/avatar.png"
                class="profle-image"
                alt="profile-img"
              />
              <h4 class="profile-name text-center"></h4>
            </div>

            <div class="rides-count">
              <div class="rides-taken">
                <h1 class="rides-taken-num">0</h1>
                <p>Rides Taken</p>
              </div>
              <div class="rides-given">
                <h1 class="rides-given-num">0</h1>
                <p>Rides Given</p>
              </div>
            </div>
          </div>

          <div class="profile-links">
            <li>
              <a href="#rides-taken">Rides Taken</a>
            </li>
            <li>
              <a href="#rides-given" target>
                Rides Given
              </a>
            </li>
            <li>
              <a href="./rides.html" class="btn-rides">
                Rides
              </a>
            </li>
            <li>
              <a href="#">Profile Settings</a>
            </li>
          </div>

          <div class="box mt-1" id="rides-taken">
            <div class="box__header text-center">
              <h4 class="box__title rides__taken-header">Rides Taken</h4>
            </div>

            <div class="box__group rides__taken-details">
              <div class="request-details">
                <h5>Ikorodu to Yaba</h5>
                <p>Date-Taken: 23-2-2018</p>
              </div>
            </div>
          </div>

          <div class="box" id="rides-given">
            <div class="box__header text-center">
              <h4 class="box__title rides__given-header">Rides Given</h4>
            </div>

            <div class="box__group rides__given-details">
              <div class="ride-details">
                <h5>Ikorodu to Yaba</h5>
                <p>Date-Given: 23-2-2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
