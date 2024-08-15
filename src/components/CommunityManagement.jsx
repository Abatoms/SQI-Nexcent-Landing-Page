/* eslint-disable react/prop-types */
import styles from "./../styles/CommunityManagement.module.css";
import communityLogoOne from "./../assets/images/communityLogoOne.png";
import communityLogoTwo from "./../assets/images/communityLogoTwo.png";
import communityLogoThree from "./../assets/images/communityLogoThree.png";

const CommunityManagement = () => {
  return (
    <div className={styles.communityContainer}>
      <div className={styles.heading}>
        <h2>Manage your entire community in a single system</h2>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div className={styles.content}>
        <CommunityManagementCard
          image={communityLogoOne}
          title={"Membership Organisations"}
          content={
            "Our membership management software provides full automation of membership renewals and payments"
          }
        />
        <CommunityManagementCard
          image={communityLogoTwo}
          title={"National Associations"}
          content={
            "Our membership management software provides full automation of membership renewals and payments"
          }
        />
        <CommunityManagementCard
          image={communityLogoThree}
          title={"Clubs And Groups"}
          content={
            "Our membership management software provides full automation of membership renewals and payments"
          }
        />
      </div>
    </div>
  );
};

export default CommunityManagement;

const CommunityManagementCard = ({ image, title, content }) => {
  return (
    <div className={styles.card}>
      <img src={image} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
