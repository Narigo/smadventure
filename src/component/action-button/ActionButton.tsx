import React from "react";
import { Button } from "react-native";
import Flavor from "../../type/flavor";

export type Action = Flavor<() => void, "Action">;

export interface ActionButtonProps {
  action: Action;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ action, label }) => {
  return <Button onPress={action} title={label} />;
};

export default ActionButton;
