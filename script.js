body {
  font-family: sans-serif;
  background: #f4f4f4;
  padding: 20px;
}

h1 {
  text-align: center;
}

.semestre {
  margin-bottom: 20px;
}

.asignatura {
  background: #dfefff;
  border: 1px solid #aaa;
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.asignatura:hover {
  background: #bddfff;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  position: relative;
}

#close-modal {
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  font-size: 20px;
}

.hidden {
  display: none;
}
