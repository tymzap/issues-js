import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import TextField from '@material-ui/core/TextField';

export type CreateIssueFormValues = {
  name: string;
  description: string;
};

export type CreateIssueFormProps = {
  onSubmit: (values: CreateIssueFormValues) => void
};

export const CreateIssueForm = forwardRef(({ onSubmit }: CreateIssueFormProps, ref) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useImperativeHandle(ref, () => ({
    submit: () => {
      onSubmit({ name, description });
    }
  }))

  return (
    <form ref={formRef}>
      <TextField
        autoFocus
        label="Title"
        type="text"
        value={name}
        fullWidth
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        autoFocus
        label="Description"
        type="text"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        style={{
          marginTop: '1rem'
        }}
      />
    </form>
  );
});
