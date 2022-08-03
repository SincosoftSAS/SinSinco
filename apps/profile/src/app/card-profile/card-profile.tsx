import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

/* eslint-disable-next-line */
export interface CardProfileProps {}

export function CardProfile(props: CardProfileProps) {
  return (
    <Card>
      <CardHeader title="Hola mundo" avatar={<Avatar>F</Avatar>} />
    </Card>
  );
}

export default CardProfile;
