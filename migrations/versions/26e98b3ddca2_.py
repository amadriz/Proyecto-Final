"""empty message

Revision ID: 26e98b3ddca2
Revises: 
Create Date: 2021-05-10 19:03:47.081951

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '26e98b3ddca2'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('registro',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('identificacion', sa.Integer(), nullable=True),
    sa.Column('tipo_idnt', sa.String(length=120), nullable=True),
    sa.Column('nombre', sa.String(length=120), nullable=True),
    sa.Column('apellido1', sa.String(length=120), nullable=True),
    sa.Column('apellido2', sa.String(length=120), nullable=True),
    sa.Column('telefono', sa.Integer(), nullable=True),
    sa.Column('fecha_nacimiento', sa.String(), nullable=False),
    sa.Column('genero', sa.String(length=120), nullable=True),
    sa.Column('estado_civil', sa.String(length=120), nullable=True),
    sa.Column('provincia', sa.String(length=120), nullable=True),
    sa.Column('canton', sa.String(length=120), nullable=True),
    sa.Column('distrito', sa.String(length=120), nullable=True),
    sa.Column('dir_exacta', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('fecha_nacimiento'),
    sa.UniqueConstraint('fecha_nacimiento'),
    sa.UniqueConstraint('identificacion'),
    sa.UniqueConstraint('identificacion'),
    sa.UniqueConstraint('telefono'),
    sa.UniqueConstraint('telefono')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('registro')
    # ### end Alembic commands ###
