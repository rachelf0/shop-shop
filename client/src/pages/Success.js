import React, { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { useMutation } from '@apollo/react-hooks';
import { ADD_ORDER } from "../utils/mutations.js";
import { idbPromise } from "../utils/helpers";