"use client";
import "rc-select/assets/index.css";
import "./styles.css";
import RCSelect, {
  BaseSelectRef,
  SelectProps as RCSelectProps,
} from "rc-select";
import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

export * from "rc-select";

type SelectProps = Omit<RCSelectProps, "suffixIcon">;

const Select = forwardRef<BaseSelectRef, SelectProps>((props, ref) => {
  return (
    <RCSelect
      ref={ref}
      allowClear
      dropdownStyle={{ zIndex: 9999 }}
      {...props}
      suffixIcon={<ChevronDown className="text-input" />}
    />
  );
});

Select.displayName = "Select";

export default Select;
