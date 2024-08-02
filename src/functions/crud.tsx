import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
    onSnapshot,
    updateDoc,
    deleteField,
    QuerySnapshot,
    DocumentData,
  } from "firebase/firestore";
  
  // These are imported from Firestore for CRUD functionalities
  
  import { db } from "../firebase/fire";
  
  // Generate a random ID for easy retrieval of data because FIREBASE provides their ID as well but it is hard to retrieve it
  const generateRandomId = (): string => {
    const characters =
      "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm1234567890";
    let randomID = "";
  
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomID += characters.charAt(randomIndex);
    }
    return randomID;
  };
  
  // CREATE DATA - C
  export const createData = async (collectionName: string, data: Record<string, any>): Promise<void> => {
    const id = generateRandomId();
    try {
      const docRef = doc(db, collectionName, id);
      await setDoc(docRef, {
        id,
        ...data,
      });
    } catch (error) {
      console.error("Error when adding doc: ", error);
    }
  };
  
  // READ DATA - R
  export const readData = async (collectionName: string, id: string): Promise<DocumentData | undefined> => {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document Data: ", docSnap.data());
        return docSnap.data();
      } else {
        console.log("No such document!");
        return undefined;
      }
    } catch (error) {
      console.error("Error reading the doc: ", error);
      return undefined;
    }
  };
  
  // UPDATE DATA - U
  export const updateData = async (collectionName: string, id: string, data: Record<string, any>): Promise<void> => {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, {
        id,
        ...data,
      });
      console.log("Document Successfully Updated!");
    } catch (error) {
      console.error("Error updating doc: ", (error as Error).message);
    }
  };
  
  // DELETE DATA - D
  export const deleteData = async (collectionName: string, id: string): Promise<void> => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting document: ", (error as Error).message);
    }
  };
  
  // READ ALL DATA
  export const readAllData = async (collectionName: string): Promise<DocumentData[]> => {
    const newDataArray: DocumentData[] = [];
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        newDataArray.push(doc.data());
      });
    } catch (error) {
      console.error("Error reading collection: ", error);
    }
    return newDataArray;
  };
  
  // INSTANT UPDATE WITHOUT REFRESHING
  export const listenToCollection = (collectionName: string, callBack: (data: DocumentData[]) => void): (() => void) => {
    const collectionRef = collection(db, collectionName);
  
    return onSnapshot(collectionRef, (querySnapshot: QuerySnapshot<DocumentData>) => {
      const newDataArr: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        newDataArr.push(doc.data());
      });
      callBack(newDataArr);
    });
  };
  
  // DELETE FIELD DATA inside database - DF
  export const deleteFieldData = async (collectionName: string, docId: string, field: string): Promise<void> => {
    if (!collectionName || !docId || !field) {
      console.error("Collection name, document ID or field name is missing");
      return;
    }
  
    try {
      const docRef = doc(db, collectionName, docId);
      const updates: Record<string, any> = {};
      updates[field] = deleteField();
      await updateDoc(docRef, updates);
      console.log(`Field '${field}' successfully deleted from document '${docId}'`);
    } catch (error) {
      console.error("Error deleting field: ", (error as Error).message);
    }
  };
  