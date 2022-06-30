import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";
import { useNavigate, Navigate, useParams } from "react-router-dom";

import "easymde/dist/easymde.min.css";
import styles from "./AddPost.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import instance from "../../axios";

export const AddPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [text, setText] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const isEditing = Boolean(id)
  const fileRef = React.useRef(null)

  const handleChangeFile = async (event) => {
    console.log(event.target.files);
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file)
      const {data} =  await instance.post('/upload', formData);
      console.log('data upload', data);
      setImageUrl(data.url)
    } catch (error) {
      console.warn(error)
      alert('error in upload image')
    }
  };

  const onClickRemoveImage = () => {
    if(window.confirm('Rasmni o`chirmoqchimisiz ?')){
      setImageUrl('')
    }
  };

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSubmit =  async () => {
    try {
      setLoading(true);

      const fields = {
        title,
        text, 
        imageUrl,
        tags
      }

      const {data} = isEditing ?  await instance.patch(`/posts/${id}`, fields) : await instance.post('/posts', fields)
      console.log(data);

      const id = isEditing ? id : data._id

      navigate(`/posts/${id}`);

    } catch (error) {
      console.warn(error)
      alert('Yuklaolmadingiz !!!')
    }
  }

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  React.useEffect(() => {
    if(id){
      instance.get(`/posts/${id}`).then(({data}) => {
        setTitle(data.title);
        setText(data.text);
        setImageUrl(data.imageUrl);
        setTags(data.tags.join(','));
      })
    }
  }, [])


  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper style={{ padding: 30 }}>
      <Button onClick={() => fileRef.current.click()} variant="outlined" size="large">
        Загрузить превью
      </Button>
      <input ref={fileRef} type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <>
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Удалить
        </Button>
        <img
        className={styles.image}
        src={`http://localhost:8080${imageUrl}`}
        alt="Uploaded"
      />
      </>
      )}
      
      <br />
      <br />
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок статьи..."
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Тэги"
        fullWidth
      />
      <SimpleMDE
        className={styles.editor}
        value={text}
        onChange={onChange}
        options={options}
      />
      <div className={styles.buttons}>
        <Button onClick={onSubmit} size="large" variant="contained">
         {isEditing ? 'Saqlash' : 'Опубликовать'} 
        </Button>
        <Link to="/">
          <Button size="large">Отмена</Button>
        </Link>
      </div>
    </Paper>
  );
};
