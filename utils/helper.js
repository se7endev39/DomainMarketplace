import { citationService } from "../_services";
import Router from 'next/router'

export const checkIfAuthorized = () => {
  citationService.ogData("").then((res) => {
  }).catch((error) => {
    if (error.response.status === 401) {
      Router.push('/login');
    }
  });
}