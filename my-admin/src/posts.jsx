import { Datagrid, DateField, DateInput, Edit, List, Show, SimpleShowLayout, TextField, TextInput } from 'react-admin';

export const PostList = () => (
    <List>
        <SimpleShowLayout>
            <TextField source="collectionName" />
            <TextField source="content" />
            <DateField source="created" />
            <TextField source="id" />
            <TextField source="new_posts" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </List>
);

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="collectionName" />
            <TextInput source="content" />
            <TextInput source="created" />
            <TextInput source="id" />
            <TextInput source="new_posts" />
            <DateInput source="updated" />
        </SimpleForm>
    </Edit>
);

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="collectionName" />
            <TextField source="content" />
            <DateField source="created" />
            <TextField source="id" />
            <TextField source="new_posts" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);