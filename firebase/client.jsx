import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrA9qr4DoP8iJ_goLSzX0FG1uld75r6wg",
  authDomain: "rutaexpress-612f8.firebaseapp.com",
  projectId: "rutaexpress-612f8",
  storageBucket: "rutaexpress-612f8.appspot.com",
  messagingSenderId: "911467443704",
  appId: "1:911467443704:web:2905c429acbf983eef920d",
  measurementId: "G-TZXS31QDKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const usuarioExcistente = (onChange) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      leerUsuarioDB(user.uid, onChange);
    } else {
      onChange(null);
    }
  });
};

export const loginUsuario = ({ email, pass }) => {
  return signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const cerrarSesionUsu = () => {
  return signOut(auth)
    .then(() => {
      // Cierre de sesión exitoso
      console.log("Cierre de sesión exitoso");
    })
    .catch((error) => {
      // Error durante el cierre de sesión
      console.error("Error durante el cierre de sesión:", error.message);
    });
};

export const registroUsuario = ({ nombre, email, pass }) => {
  return createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;

      registroUsuarioDB({ idAuth: user.uid, nombre, email });
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const registroUsuarioDB = async (dataUsu) => {
  try {
    const docRef = await addDoc(collection(db, "usuarios"), {
      idAuth: dataUsu.idAuth,
      nombre: dataUsu.nombre,
      email: dataUsu.email,
      tipoUsuario: 1,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const leerUsuarioDB = async (idAuth, onChange) => {
  const q = query(collection(db, "usuarios"), where("idAuth", "==", idAuth));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    const { idAuth, nombre, email, tipoUsuario } = doc.data();
    onChange({ docId: doc.id, idAuth, nombre, email, tipoUsuario });
  });
};

export const actualizarUsuarioDB = async (docId, dataUsu) => {
  console.log(docId);
  const washingtonRef = doc(db, "usuarios", docId);

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    nombre: dataUsu,
  });
};

export const crearPedidoDB = async (dataPedido) => {
  try {
    const docRef = await addDoc(collection(db, "pedidos"), {
      origen: dataPedido.origen,
      destino: dataPedido.destino,
      estado: 1,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const listaPedidosDB = async () => {
  const querySnapshot = await getDocs(collection(db, "pedidos"));
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    return {
      id,
      ...data,
    };
  });
};

export const actualizarPedidoDB = async (docId, estado) => {
  const washingtonRef = doc(db, "pedidos", docId);

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    estado: estado,
  });
};

export const leerPedidoDB = async (docId, onChange) => {
  const docRef = doc(db, "pedidos", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const data = docSnap.data();
    const id = docSnap.id;
    onChange({ id, ...data });
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
