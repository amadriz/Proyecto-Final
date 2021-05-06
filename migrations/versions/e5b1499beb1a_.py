"""empty message

Revision ID: e5b1499beb1a
Revises: b55aeb9365dd
Create Date: 2021-05-06 05:19:06.011175

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e5b1499beb1a'
down_revision = 'b55aeb9365dd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('registro', 'tipo_id',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('registro', 'apellido2',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('registro', 'genero',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('registro', 'estado_civil',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('registro', 'canton',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('registro', 'distrito',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('registro', 'dir_exacta',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('registro', 'dir_exacta',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('registro', 'distrito',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('registro', 'canton',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('registro', 'estado_civil',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('registro', 'genero',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('registro', 'apellido2',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('registro', 'tipo_id',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    # ### end Alembic commands ###
