import { UserEntity } from '@user/users/entities';

export const enrichIsMe = (userId: number, target: UserEntity) => {
  if (!userId) {
    target.isMe = null;
    return;
  }

  target.isMe = target.id === userId;
};

export const bulkEnrichIsMine = <T extends { userId: number; isMine: boolean }>(
  userId: number,
  owners: T[],
) => {
  if (!userId) {
    return;
  }

  for (const owner of owners) {
    owner.isMine = owner.userId === userId;
  }
};
