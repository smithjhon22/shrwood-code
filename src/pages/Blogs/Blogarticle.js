import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import PageHeader from "../../Components/PageHeader";
import blogarticleimg from "../../assets/img/blogarticleimg.webp";
import "../../assets/css/blogarticle.css";

const Blogarticle = () => {
  return (
    <>
      <Header />
      <PageHeader pagename="Blogs & Articles" pagelinkname="Services" />

      {/* Blogarticle section  */}

      <section className="blog-article-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-article-all">
                <img src={blogarticleimg}></img>
                <div className="blog-article-para">
                  <h2>Our Success Is Your Success</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris commodo quis tellus ac tristique. Nunc augue nibh,
                    congue in purus blandit, vehicula placerat est. Sed
                    tincidunt metus in ullamcorper semper. Etiam vel mi eget
                    nulla dictum vehicula a eu lacus. Vivamus vitae laoreet
                    ante, posuere maximus erat. Cras commodo varius facilisis.
                    Mauris eu congue tortor, eget scelerisque tellus. Vestibulum
                    quis mauris turpis.
                  </p>

                  <p>
                    Curabitur convallis dui quis risus egestas, sed dictum ante
                    imperdiet. Ut efficitur odio eu tincidunt sodales. Sed vitae
                    porttitor elit. Nullam vel congue nisl, ac interdum libero.
                    Sed eget hendrerit diam, vitae euismod erat. Cras ut
                    vestibulum nulla, tincidunt fermentum turpis. In hac
                    habitasse platea dictumst.
                  </p>

                  <p>
                    Donec mauris quam, laoreet et nunc ut, suscipit auctor
                    lorem. Sed eget odio dictum, ultrices augue quis,
                    scelerisque tortor. Sed ornare erat nec urna placerat, nec
                    vulputate dui vulputate. Curabitur eleifend sapien lacus,
                    sit amet semper ligula tempor vel. Ut egestas vel magna sed
                    vestibulum. Integer semper, mauris id fringilla ultricies,
                    massa erat placerat nisl, a accumsan magna urna tincidunt
                    tortor. Sed at eros convallis, molestie magna sed, rhoncus
                    sapien.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris commodo quis tellus ac tristique. Nunc augue nibh,
                    congue in purus blandit, vehicula placerat est. Sed
                    tincidunt metus in ullamcorper semper. Etiam vel mi eget
                    nulla dictum vehicula a eu lacus. Vivamus vitae laoreet
                    ante, posuere maximus erat. Cras commodo varius facilisis.
                    Mauris eu congue tortor, eget scelerisque tellus. Vestibulum
                    quis mauris turpis.
                  </p>

                  <p>
                    Curabitur convallis dui quis risus egestas, sed dictum ante
                    imperdiet. Ut efficitur odio eu tincidunt sodales. Sed vitae
                    porttitor elit. Nullam vel congue nisl, ac interdum libero.
                    Sed eget hendrerit diam, vitae euismod erat. Cras ut
                    vestibulum nulla, tincidunt fermentum turpis. In hac
                    habitasse platea dictumst.
                  </p>

                  <p>
                    Donec mauris quam, laoreet et nunc ut, suscipit auctor
                    lorem. Sed eget odio dictum, ultrices augue quis,
                    scelerisque tortor. Sed ornare erat nec urna placerat, nec
                    vulputate dui vulputate. Curabitur eleifend sapien lacus,
                    sit amet semper ligula tempor vel. Ut egestas vel magna sed
                    vestibulum. Integer semper, mauris id fringilla ultricies,
                    massa erat placerat nisl, a accumsan magna urna tincidunt
                    tortor. Sed at eros convallis, molestie magna sed, rhoncus
                    sapien.
                  </p>
                </div>
              </div>

              <div className="news-date-day for-news-move">
                <h4>02</h4>
                <h5>Mar</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of BlogArticle section  */}
      <Footer />
    </>
  );
};

export default Blogarticle;
