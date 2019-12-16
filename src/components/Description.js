import React, { Fragment } from 'react';

const Description = props => {
  const { title, thirdStep } = props;
  return (
    <Fragment>
      <div class="row mt-5">
        <div class="col ml-3 border-left-success h-100 py-2">
          <h5>How To Download Instagram {title}?</h5>
          <ul>
            <li>Go to Instagram website.</li>
            <li>Open the {title} that you want to download.</li>
            <li>{thirdStep}</li>
            <li>Paste in the above form.</li>
            <li>Click Download.</li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col h-100 py-2">
          <h4>What is Instagram ?</h4>
          <p>
            Instagram is a free photo and video sharing app available on Apple
            iOS, Android and Windows Phone. People can upload photos or videos
            to our service and share them with their followers or with a select
            group of friends. They can also view, comment and like posts shared
            by their friends on Instagram. Anyone 13 and older can create an
            account by registering an email address and selecting a username.
          </p>

          <p>
            The company was founded by Kevin Systrom and Mike Krieger, both
            Stanford University graduates, in 2010 and now has around 200
            million users. Facebook, the social networking giant, acquired the
            company in 2012. While its basic premise is the sharing of pictures,
            the site’s popularity comes from its picture-editing functionality.
          </p>

          <p>
            Once a user snaps a picture, Instagram filters – of which there are
            dozens – can transform images in a manner reminiscent of
            old-fashioned Polaroid prints. The app allows for the creation of
            personal profiles but also can be connected to existing social
            networking profiles such as Facebook and Twitter, meaning users can
            share their pictures across platforms.
          </p>

          <h4>Features</h4>

          <h6>Instagram Questions</h6>
          <p>
            Instagram Questions is a feature introduced in July 2018. It allows
            users to answer questions posed by their followers. This is slightly
            reminiscent of the controversial Ask.FM, although answers to
            questions are not anonymous! If you send a question to someone you
            follow they can post that question to their story and write a
            response but it will not tag you as the person who asked the
            question. It is a popular feature with influencers.
          </p>

          <h6>Instagram Direct</h6>
          <p>
            nstagram Direct allows you to share photos, videos, hashtag pages,
            profiles and locations with a single person or small group of people
            (up to 15 people) right from a users’ newsfeed. You can access
            Instagram Direct via the Inbox icon in the top right-hand corner of
            the app.
          </p>

          <h6>Instagram Stories</h6>
          <p>
            Instagram Stories allows users to post a selection of photos/videos
            into one story. The new feature works in much the same way as
            Snapchat Stories, with stories disappearing after 24 hours.
            Instagram Stories are not posted to a users profile or on the
            Newsfeed. Instagram Stories follow the same privacy settings as a
            users’ Instagram profile. For example, if a user has a private
            account and posts a story, only the users’ friends will be able to
            view this story.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Description;
