import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { PhotoStorage } from '../target/types/photo_storage';

describe('photo-storage', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.PhotoStorage as Program<PhotoStorage>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
