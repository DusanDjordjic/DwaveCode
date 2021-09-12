import styles from "../../styles/admin/AddBlogPost.module.scss";
import { useRef } from "react";
import Head from "next/head";
import MarkDownBox from "../../components/markDown/MarkDownBox";
import { useState, useEffect } from "react";
const formInitData = {
  title: "",
  description: "",
  editorPick: false,
  image: [],
  tags: "",
  text: "",
  readTime: "",
};
const AddBlogPost = () => {
  const [adminCheck, setAdminCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(formInitData);
  const chooseFileButton = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === process.env.ADMIN_SECRET) {
      setAdminCheck(true);
    } else {
      setError("Pogrešna šifra");
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, [e.target.name]: e.target.files });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    for (const property in formData) {
      if (formData[property] ===  "" ) {
        console.log("Fields are left empty");
        return;
      }
    }
    const newFormData = new FormData();
    newFormData.append("image", formData.image[0]);
    // Sending image to upload
    const imageUploadResponse = await fetch("/api/imageupload", {
      method: "post",
      // Browser automaticli sets headers
      // headers: { "Content-Type": "multupart/form-data" },
      body: newFormData,
    });
    const imagePath = await imageUploadResponse.json();
    console.log(imagePath);
    const uploadPostResponse = await fetch("/api/addpost", {
      method: "post",
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
        editorPick: formData.editorPick,
        coverImage: imagePath.data,
        tags: formData.tags,
        readTime: formData.readTime,
        text: formData.text,
      }),
    });
    const uploadPostData = await uploadPostResponse.json();
    console.log(uploadPostData);
    if (uploadPostData.error) {
      console.log("Doslo je do greske");
      return;
    }
    console.log("Sve je super");
  };
  const handleChooseFileClick = () => {
    chooseFileButton.current.click();
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [error]);
  if (!adminCheck) {
    return (
      <>
        <Head>
          <title>Add Blog Post</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.Section__LayoutContainer}>
            <div className={styles.Section__Layout}>
              <main className={styles.main}>
                <section className={styles.formSection}>
                  <div className={styles.formWrapper}>
                    <h1>Ukucajte Šifru</h1>
                    <form onSubmit={handleSubmit}>
                      <div className={styles.formControl}>
                        <label htmlFor="password">Šifra</label>
                        <input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className={styles.formControl}>
                        <button type="submit">Submit</button>
                      </div>
                    </form>
                    <p>{error}</p>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Add Blog Post</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.Section__LayoutContainer}>
          <div className={styles.Section__Layout}>
            <main className={styles.main}>
              <section className={styles.addPostSection}>
                <div className={styles.contentWrapper}>
                  <h1>Dodaj Blog Post</h1>
                  <form onSubmit={(e) => handleFormSubmit(e)}>
                    <div className={styles.gridTwo}>
                      <div className={styles.formControl}>
                        <label htmlFor="title">Title</label>
                        <input
                          id="title"
                          type="text"
                          name="title"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className={styles.formControl}>
                        <label htmlFor="description">Description</label>
                        <input
                          id="description"
                          type="text"
                          name="description"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>

                    <div
                      className={`${styles.formControl} ${styles.noDesign} ${styles.chooseImageInput}`}
                    >
                      <label htmlFor="image">CoverImage</label>
                      <input
                        ref={chooseFileButton}
                        id="image"
                        type="file"
                        name="image"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div className={styles.gridFour}>
                      <div className={styles.formControl}>
                        <label htmlFor="readTime">ReadTime</label>
                        <input
                          id="readTime"
                          type="number"
                          name="readTime"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className={styles.formControl}>
                        <label htmlFor="tags">Tags</label>
                        <input
                          id="tags"
                          type="text"
                          name="tags"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className={styles.formControl}>
                      <div className={styles.buttonWrapper}>
                        <button type="button" onClick={handleChooseFileClick}>
                          Choose image
                        </button>
                        <p>{formData?.image[0]?.name || "no image choosen"}</p>
                      </div>
                    </div>
                    <div className={`${styles.formControl} ${styles.noDesign}`}>
                      <input
                        id="editorPick"
                        type="checkbox"
                        name="editorPick"
                        value="true"
                        onChange={(e) => handleChange(e)}
                      />
                      <label htmlFor="editorPick">EditorPick</label>
                    </div>
                    <div className={styles.gridTwo}>
                      <div className={styles.formControl}>
                        <label htmlFor="text">Text</label>
                        <textarea
                          name="text"
                          id="text"
                          cols="30"
                          rows="10"
                          onChange={(e) => handleChange(e)}
                        ></textarea>
                      </div>
                      <div
                        className={`${styles.formControl} ${styles.markDownBox}`}
                      >
                        <p>Markdown</p>
                        <MarkDownBox text={formData.text} />
                      </div>
                    </div>

                    <div className={styles.formControl}>
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddBlogPost;
