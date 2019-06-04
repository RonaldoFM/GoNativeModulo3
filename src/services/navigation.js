import { NavigationActions } from "react-navigation";

let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export function navigate(routeName, params) {
  navigator.dispath(
    NavigationsActions.navigate({
      routeName,
      params
    })
  );
}
