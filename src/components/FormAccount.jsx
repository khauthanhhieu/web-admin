import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';

export default function FormAccount() {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="my-input">Tên</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text"> We`ll never share your email.</FormHelperText>
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="my-input">Ngày sinh</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text"> </FormHelperText>
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="my-input">Địa chỉ</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text"> </FormHelperText>
      </FormControl>
      <br />
    </>
  );
}
